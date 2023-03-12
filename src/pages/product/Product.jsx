import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './product.css';
import { Context } from "../../context/Context";


const Product = ()=> {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [description,setDescription]=useState("");
    // const [file1,setFile1]=useState(null);
    // const [file2,setFile2]=useState(null);
    // const [file3,setFile3]=useState(null);
    const {user}=useContext(Context);

    const handleSubmit=async (e)=>{

        e.preventDefault();


        const newProduct={
            name,
            price,
            quantity,
            description,
            // file1,
            // file2,
            // file3
        }

        // const productArray=[];
        
        // if(file1&&file2&&file3){
        //     const data=new FormData();
        //     const file1name=file1.name;
        //     const file2name=file2.name;
        //     const file3name=file3.name;

        //     data.append("name1",file1name);
        //     data.append("file1",file1)

        //     data.append("name2",file2name);
        //     data.append("file2",file2)
            
        //     data.append("name3",file3name);
        //     data.append("file3",file3)

        //     // productArray[0]=file1name
        //     // productArray[1]=file2name
        //     // productArray[2]=file3name

        //     newProduct.photoPicture=file1name;
        //     newProduct.photoPicture=file2name;
        //     newProduct.photoPicture=file3name;

        //     try{
        //         await axios.post("http://localhost:5000/server/product/create",FormData);
        //         console.log("Successfully uploaded file");
        //     }catch(err){
        //         console.log(err);
        //     }

        // }


        
       

        

        // newProduct.productPictures=productArray;

        console.log(newProduct);

        try{
            const res=await axios.post("http://localhost:5000/server/product/create",newProduct);
            window.location.replace("/");
        }catch(err){
            console.log(err)
        }
    }



    return (
        <>
            <div className="form-wrapper">
                <h1>
                    Add a new product here
                </h1>
                <form className="productForm" onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
                    <div className="input-wrapper">
                    <label>
                        Product name: 
                    </label>
                    <input type="text"  placeholder="Enter product name..." className="writeInput" autoFocus={true} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                    <label>
                        Product price: 
                    </label>
                    <input type="number" placeholder="Enter product price..." className="writeInputPrice" autoFocus={true} onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                    <label>
                        Quantity: 
                    </label>
                    <input type="number"  placeholder="Enter product quantity..." className="writeInput" autoFocus={true} onChange={(e)=>setQuantity(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                    <label>
                        Description: 
                    </label>
                    {/* <input type="text" className="" placeholder="Enter product price..."/> */}
                    <textarea placeholder="Product Description" type="text" className="writeInput writeText"  onChange={(e)=>setDescription(e.target.value)} >

                    </textarea>
                    </div>
                    {/* <input type="file" name="productPicture" id="fileInput" formAction="/uploadmultiple" onChange={(e)=> setFile1(e.target.files[0])} />
                    <input type="file" name="productPicture" id="fileInput" formAction="/uploadmultiple" onChange={(e)=> setFile2(e.target.files[0])}/>
                    <input type="file" name="productPicture" id="fileInput" formAction="/uploadmultiple" onChange={(e)=> setFile3(e.target.files[0])} /> */}

                    
                      <button className="submit-button" type="submit">
                       Add
                     </button>
                    
                </form>

                
                
            </div>
        </>
    )
}

export default Product;