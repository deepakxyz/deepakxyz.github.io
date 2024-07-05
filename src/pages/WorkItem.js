import React, {useEffect, useState, Component} from "react";
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import ReactPlayer from "react-player";
import {unified} from 'unified';
import remarkParse from "remark-parse";
import remarkReact from "remark-react";


import { MDXProvider } from "@mdx-js/react";
import  AdyaWork from '../mdx/adya.mdx';


const WorkItemPage = () => {

    const {workitem} = useParams();
    const [work, setWork] = useState('');

    // useEffect(()=>{
    //     const fetchWorkDetail = async () => {
    //         try{

    //             const res = await fetch(`${process.env.PUBLIC_URL}/content/${workitem}.md`);
    //             if(!res.ok){
    //                 throw new Error("Network response was not ok");
    //             }
    //             const text = await res.text();
    //             // console.log('Fetched markdown content', text);
    //             setWork(text);


    //         }catch(error){
    //             console.error("Error fetching work details", error);
    //         }
    //     };

    //     fetchWorkDetail();

    // }, [workitem]);

    // custome render for markdown
    // const renderers = {
    //     link: (node) => {
    //         const {href} = node;
    //         if (href && href.includes('vimeo.com')){
    //             const videoId = href.split('/').pop();
    //             return <ReactPlayer url={`https://vimeo.com/${videoId}`} controls width="100%"/>;
    //         }

    //         return <a href={href}>{node.children}</a>;
    //     },
    // };
    console.log(AdyaWork);


    return (
        <>
        <div className="content">
            <div className = "work-detail-wrapper">
                {/* <ReactMarkdown children={work} 
                remarkPlugins={[remarkParse]} 
                components={Ma}
                /> */}
                <ErrorBoundary>
                    <MDXProvider >
                        <AdyaWork components={Ma}/>
                    </MDXProvider>
                </ErrorBoundary>
            </div>
        </div>
        </>
    )
}

export default WorkItemPage;


const Ma = () => {
    return  (
        <>
        <div className ="hello">
            Hello hello from ma
        </div>
        </>
    )
}


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering this content.</div>;
    }

    return this.props.children;
  }
}