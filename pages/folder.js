import Link from 'next/link';
import React, { Component } from 'react'


export default class folder extends Component {
     refreshPage(){ 
        window.location.reload(); 
    }
    render() {
        return (
            <div class="justify-center  content-center items-center">
                <li class="justify-center  content-center items-center">
                <div class=" self-center my-12 mx-25 px-4 md:px-12 text-center  content-center">
        <div class="flex flex-wrap -mx-1 lg:-mx-3 text-center  content-center">
    
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-1 lg:px-1 lg:w-full">
    
                <article class="overflow-hidden rounded-lg shadow-lg text-center  content-center">
    
                   <Link href={'#' +this.props.body} passHref={true}>
                   <button >
                        <img alt="Placeholder" class="block h-auto w-full" src="https://cdn.osxdaily.com/wp-content/uploads/2017/10/folder-ios-files-app.jpg"></img>
                    </button></Link>
    
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4 text-center  content-center">
                        <h1 class="text-lg">
                            
                            <Link href={'#' +this.props.body} passHref={true} >
                            <button onClick={ this.refreshPage } >
                                {this.props.body}
                            </button></Link>
                        </h1>
                        <p class="text-grey-darker text-sm font-bold">
                        ID-{this.props.id}
                        </p>
                    </header>
                    <div  class="">
                    <button type="submit" class="flex items-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-white-600 hover:bg-white-700 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={this.props.delete}>Delete</button>
                    </div>
                    
    
                </article>
    
            </div>         
           
    
        </div>
    </div>
                </li>
            </div>
        )
    }
}
