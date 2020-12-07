import Link from 'next/link';

const File = () => (

    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">          
            
            <div class="my-1 px-1 w-1/2 md:w-1/6 lg:my-4 lg:px-4 lg:w-1/6">
    
                
                <article class="overflow-hidden rounded-lg shadow-lg">
    
                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/File-512.png">
                   </img> </a>
    
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                File Name
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                            Created On-7/12/2020
                        </p>
                    </header>
    
                    
    
                </article>
               
    
            </div>
            
    
        </div>
    </div>
)

export default File