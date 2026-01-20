import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Auth/AuthContext';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const MyProperty = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ["my-properties", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-properties?email=${user.email}`)
            return res.data
        }
    })

    const deleteMutation = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.delete(`/api/properties/${id}`)
            return res.data
        },
        onSuccess: () => {
            refetch()
            Swal.fire("Deleted!", "Property has been removed.", "success");
        }

    })
    const handledelete = (id) => {
        Swal.fire({
            title: "Do you want to delete this property?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "delete",
            denyButtonText: `Don't delete`
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMutation.mutate(id);
                Swal.fire("deleted!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("property is not deleted", "", "info");
            }
        });
    }
const [selectedProperty,setSelectedProperty]=useState(null)
const queryClient =useQueryClient()
    const updateMutation =useMutation({
        mutationFn :async(updatedData)=>{
            const {_id,...dataWithoutId}=updatedData;
            const res =await axiosSecure.patch(`/api/properties/${_id}`,dataWithoutId)
            return res.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries(["my-properties"])
            document.getElementById("edit_modal").closest()
            Swal.fire("Updated!","Property details saved","success")

        }
    })


    const handleUpdateSubmit =(e)=>{
        e.preventDefault ()
        const form = e.target
        const updatedData ={
            _id :selectedProperty._id,
            propertyName:form.proeprtyName.value,
            description: form.description.value,
            price:form.price.value,
            catagory:form.catagory.value,
            location:form.location.value,
        }
    }

    return ( 
        <div>
            <h1 className='text-center  p-3 max-w-2xl mx-auto bg-white rounded-2xl text-2xl font-bold'>My Property</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-8 bg-[#C1EDF0] min-h-screen '>
                {
                    properties.map((property) => (
                        <div key={property._id} className="card mt-3 mx-auto bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={property.imageLink}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{property.
                                    propertyName}</h2>
                                <p>{property.description} </p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-primary">{property.price} $</button>
                                    <button className='btn   bg-[#99C2FF]' >
                                        {property.location}
                                    </button>
                                    <button className='btn bg-[#CCE0FF]' >
                                        {property.catagory}
                                    </button>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-2 mx-auto my-2'>
                                <button className='btn bg-[#588157] text-white shadow-2xl'>Edit</button>
                                <button onClick={()=>handledelete(property._id)} className='btn  bg-[#D00000] text-white shadow-2xl'>Delete</button>
                                <button className='btn btn-primary shadow-2xl'>View Details</button>

                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default MyProperty;