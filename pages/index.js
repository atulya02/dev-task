import Head from 'next/head';
import Folder from './folder';
import File from './File'
import Navbar from './navbar';
import React, { Component } from 'react'

export default class Index extends Component {
  
  componentDidMount() {
   
    const id=window.location.pathname;
    
      console.log("My Drive/"+id);
      
   
  }
  
  /*componentDidMount() {
    
    const {id}=this.props.match.params;
    fetch(`https://api.orbi.com/folders/${id}`)
    .then()    
    console.log("My Drive"+id);
  
   
  }*/
  constructor(){
    super();
    this.folderID=0;
    this.state={
      folderarray:[

      ],
      Body:"",
      id:""
    }
  }
deleteEvent=(index)=>{
  const copyfolderarray=Object.assign([],this.state.folderarray);
  copyfolderarray.splice(index,1);
  this.setState({
    folderarray:copyfolderarray
  })
}
setFolder=(e)=>{
  this.setState({
    Body:e.target.value
  })
}

addFolder=()=>{
  this.folderID=this.folderID+1;
  const copyfolderarray=Object.assign([],this.state.folderarray)
  copyfolderarray.push({
    id:this.folderID,
    body:this.state.Body
  })
  this.setState({
    folderarray:copyfolderarray
  })
}
  render() {
    return (
      <div class="grid " >      
      <Navbar/> 
      <div class="px-20 py-10 sm:px-0  grid justify-items-center " >
        <div class="border-4 border-dashed border-gray-200  rounded-lg h-40 w-1/3 h-9">
        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <input type="text" onBlur={this.setFolder} class="w-1/2 border-indigo-500 p-5 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Enter Name of Folder"/>
           <div class=" bg-gray-50 text-center  content-center" >
           <button  type="submit" class="inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  onClick={this.addFolder}>Add folder</button>
          </div>
        </div>
      </div>  
      
      
      <Head>
      
        <title>Orbi Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="pl-50 grid grid-cols-3 gap-2 flex flex-wrap content-start justify-center  content-center px-40">
        <h1 class="text-2xl px-50 pb-2">Folders</h1>
        
      </div>
      <div class="pl-50 grid grid-cols-1 gap-2 flex flex-wrap content-start justify-center  content-center px-40">
      <hr size="1" width="80%"/>
        
      </div>
     
      <ul class="grid grid-cols-3 gap-2 flex flex-wrap content-start justify-center  content-center px-40 ">
        <File></File>
                    {
                        this.state.folderarray.map((folder,index)=>{
                            return(
                                <Folder key={folder.id} id={folder.id} body={folder.body} delete={this.deleteEvent.bind(this,index)}/>
                            )
                        })
                    }
                </ul>
      
     </div>
     
    )
  }
}





