/* eslint-disable no-undef */
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  

const AddProducts = () => {
    const navigate = useNavigate();

    // Toastyfy
    const handleAddProduct = () =>{
        toast ('Added SuccessFully')
    }
    

    const addHandleSubmit = async (e) => {
        
        e.preventDefault();


        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        // console.log(id)
        
        // toastify
        // eslint-disable-next-line no-unused-vars
        

        const data = {id, title, brand, price, description, image_url};
        // console.log(data);
        if (confirm('Are you sure? Added New Product')) {
            try{const response = await fetch('http://localhost:3000/shoes',{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((data)=>{
                console.log(data);
                form.reset();
                handleAddProduct(); 
              })
              if (response.ok) {
                // onDelete(id);
                toast.success('Added successfully');
                navigate('/dashboard', { replace: true }); // Navigate to a different route after deletion
              } else {
                toast.error('Added failed');
              }
            } catch (error) {
              console.error('Error added the product:', error);
              toast.error('Added failed');
            }
          }
        };

    return (
        <div>
            <h2 className="text-5xl font-bold text-center ">Add Products</h2>
        <div className="my-16">
            
            <form onSubmit={addHandleSubmit}>
            <div  className="mt-2">
                <input className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg " 
                 type="text" name="title" placeholder="Title" />
            </div>
            <div className="mt-2">
                <input className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg "
                 type="text" name="brand" placeholder="Brand" />
            </div>
            <div className="mt-2">
                <input className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg "
                 type="number" name="price" placeholder="Price" />
            </div>
            <div className="mt-2">
                <input className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg "
                 type="text" name="description" placeholder="Description" />
            </div>
            <div className="mt-2">
                <input className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg "
                 type="text" name="image_url" placeholder="Image_URL" />
            </div>
            <div className="mt-2">
                <input className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg "
                 type="text" name="id" placeholder="ID" />
            </div>
            
            <div className="mt-2 flex justify-center items-center">
            
            <button >
            <input 
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              value="Add product"
            />
            </button>
          </div>
          <ToastContainer theme='colored'/>
            </form>
            
            </div>
        </div>
        
    );
};

export default AddProducts;