import React from 'react'
import { GraphQLClient } from 'graphql-request';
import { getPostData, getPostSlugs, getRecentPosts } from '../../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';


const graphcms = new GraphQLClient('https://api-us-west-2.graphcms.com/v2/ckxpk6xgz05zt01z6gtuqhy32/master')

export async function getStaticProps({ params }) {
    // console.log(params)
    const { post } = await graphcms.request(
        `
            query PostPageQuery($slug: String!) {
                post(where: {slug: $slug}) {
                    youTubeLink
                    title
                    slug
                    date
                    content {
                        html
                        markdown
                        raw
                    }
                    featureImage {
                        url
                    }
                }
            }
        `,
        {
            slug: params.slug,
        }
    )
    return {
        props: {
            post,
            
        }
    }
}

export async function getStaticPaths() {
    const { posts } = await graphcms.request(
        `
        query MyQuery {
            posts {
              slug
            }
          }
        `
    )

    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    }
}

const PostDetails = ({ post }) => {
    const raw = post.content.raw.children
    const markdown = post.content.markdown
    // const html = post.content.html
    // console.log(raw[0].children[0].text)
    // console.log(raw) 
    console.log(post)

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
        console.log(text)

        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
          if (obj.link) {
              modifiedText = (<a key={index}>{text}</a>)
          }
          
        }
    
        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'block-quote':
                return <blockquote key={index} className="italic border-l-4 border-gray-300 pl-6 mb-8 py-4 text-lg">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</blockquote>
            case 'code-block':
                return <code key={index} className="text-md mb-8 bg-gray-300  bg-opacity-50 rounded-lg p-4 border-2 border-gray-300">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</code>
            case 'bulleted-list':
                return <ul key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</ul>
            case 'list-item-child':
                return <li key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</li>
            case 'list-item':
                return <li key={index}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</li>
            case 'link':
                return <a key={index} className='text-md'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item[0]}</React.Fragment>)}</a>
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
          default:
            return modifiedText;
        }
      };
    
    return (
        <div className='mx-auto w-10/12 lg:max-w-4xl my-12 flex flex-col'>
            <h1 className="my-2 text-xl font-semibold md:text-2xl lg:text-4xl">{post.title}</h1>
            <p className='mb-4 font-light text-sm'>{post.date}</p>
            <a href={post.youTubeLink} className='mb-6'>
                <Image 
                    src={post.featureImage.url}
                    className="rounded-lg"
                    width='1080'
                    height='600'
                />
            </a>
            
            {/* <div dangerouslySetInnerHTML={{ __html: html}} /> */}
            {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
                return getContentFragment(index, children, typeObj, typeObj.type)
            })}
            {/* {markdown} */}
            <RichText 
                content={post.content.raw}
                renderers={{
                    p: ({ children }) => <p className='mb-4'>{children}</p>,
                    h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-md font-semibold mb-4">{children}</h4>,
                    bold: ({children}) => <b className='font-semibold'>{children}</b>,
                    underline: ({ children }) => <u>{children}</u>, 
                    ul: ({ children }) => <ul className='py-6'>{children}</ul>,
                    li: ({ children }) => <li className='border-2 border-blue-300 flex items-center'><span className='text-3xl border-2 border-red-300 pb-1 pr-1'>•</span>{children}</li>,
                    a: ({ children, href }) => <a href={href} className='text-blue-500 hover:underline'>{children}</a>,
                    blockquote: ({ children }) => <blockquote className="italic border-l-4 border-gray-300 pl-6 mb-8 py-4 text-lg">{children}</blockquote>,
                    code_block: ({ children }) => <code className="text-md mb-8 bg-gray-300  bg-opacity-50 rounded-lg p-4 border-2 border-gray-300">{children}</code>
                }}
            />
        </div>
    )
}

export default PostDetails
