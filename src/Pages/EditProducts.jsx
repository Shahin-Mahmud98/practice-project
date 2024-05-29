

import { useLoaderData, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  

const EditProducts = () => {
    const shoe = useLoaderData();
    const navigate = useNavigate();
    // console.log(shoe);
    // const [clicked, setClicked] = useState(false); 

    // const editProduct = () =>{
    //     // setClicked(true); 
    //     toast ('Edit SuccessFully')
    // }
    

    const addHandleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id, title, brand, price, description, image_url };
        // console.log(data);

        if (confirm('Are you sure? Edited the Product')){
            try{
                const response = await fetch(`http://localhost:3000/shoes/${shoe.id}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then((res) => res.json())
                .then((data) => {
                    toast ('Edit SuccessFully')
                    console.log(data);
                    form.reset();
                });
                
            
            if (response.ok) {
                // onDelete(id);
                toast.success('Edited successfully');
                navigate('/dashboard', { replace: true }); // Navigate to a different route after deletion
              } else {
                toast.error('Edit failed');
              }
            } catch (error) {
              console.error('Error editing the product:', error);
              toast.error('Edit failed');
            }
          }
        };
        
    //    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
        
    //         method: 'PATCH',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         toast ('Edit SuccessFully')
    //         console.log(data);
    //         form.reset();
    //     });
    // };

    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Edit Products</h2>
            <div className="my-16">
                <form onSubmit={addHandleSubmit}>
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg"
                            type="text"
                            name="title"
                            placeholder="Title"
                            defaultValue={shoe.title}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg"
                            type="text"
                            name="brand"
                            placeholder="Brand"
                            defaultValue={shoe.brand}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg"
                            type="number"
                            name="price"
                            placeholder="Price"
                            defaultValue={shoe.price}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg"
                            type="text"
                            name="description"
                            placeholder="Description"
                            defaultValue={shoe.description}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg"
                            type="text"
                            name="image_url"
                            placeholder="Image_URL"
                            defaultValue={shoe.image_url}
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            className="bg-gray-100 p-5 w-full border border-black text-xl rounded-lg"
                            type="text"
                            name="id"
                            placeholder="ID"
                            defaultValue={shoe.id}
                            
                        />
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <button  >
                        <input
                            className="btn mt-4 w-full bg-red-500 text-white p-4"
                            type="submit"
                            value="Edit Product"
                        />
                        </button>
                        
                    </div>
                    <ToastContainer theme='colored'/>
                </form>
            </div>
        </div>
    );
};

export default EditProducts;

