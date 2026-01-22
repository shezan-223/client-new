import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Auth/AuthContext';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyProperty = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const [selectedProperty, setSelectedProperty] = useState(null);

    // React Hook Form setup
    const { register, handleSubmit, reset } = useForm();

    // Fetch Properties
    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ["my-properties", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-properties?email=${user.email}`);
            return res.data;
        }
    });

    // Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.delete(`/api/properties/${id}`);
            return res.data;
        },
        onSuccess: () => {
            refetch();
            Swal.fire("Deleted!", "Property has been removed.", "success");
        }
    });

    // Update Mutation
    const updateMutation = useMutation({
        mutationFn: async (updatedData) => {
            const { _id, ...dataWithoutId } = updatedData;
            const res = await axiosSecure.patch(`/api/properties/${_id}`, dataWithoutId);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["my-properties"]);
            document.getElementById("my_modal_3").close();
            Swal.fire("Updated!", "Property details saved", "success");
        },
        onError: () => {
            Swal.fire("Error", "Failed to update property", "error");
        }
    });

    // Handle Edit Click - Fills the form with existing data
    const openEditModal = (property) => {
        setSelectedProperty(property);
        reset(property); // This fills the form inputs automatically
        document.getElementById('my_modal_3').showModal();
    };

    // Handle form submit for update
    const onUpdateSubmit = (data) => {
        const payload = { ...data, _id: selectedProperty._id };
        updateMutation.mutate(payload);
    };

    const handledelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will permanently delete the property!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMutation.mutate(id);
            }
        });
    };

    if (isLoading) return <div className="text-center p-10">Loading...</div>;

    return (
        <div>
            <h1 className='text-center p-3 max-w-2xl mx-auto bg-white rounded-2xl text-2xl font-bold my-5'>My Property</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-8 bg-[#C1EDF0] p-5 rounded-xl min-h-screen'>
                {properties.map((property) => (
                    <div key={property._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={property.imageLink} alt="Property" className="h-48 w-full object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{property.propertyName}</h2>
                            <p className="text-sm line-clamp-2">{property.description}</p>
                            <div className="card-actions justify-start mt-2">
                                <span className="badge badge-primary">{property.price} $</span>
                                <span className="badge badge-ghost">{property.location}</span>
                                <span className="badge badge-outline">{property.catagory}</span>
                            </div>
                            <div className='grid grid-cols-3 gap-2 mt-4'>
                                <button onClick={() => openEditModal(property)} className="btn btn-sm bg-[#588157] text-white">Edit</button>
                                <button onClick={() => handledelete(property._id)} className='btn btn-sm bg-[#D00000] text-white'>Delete</button>
                             <Link to={`/property/${property._id}`} >
                             
                                <button className='btn btn-sm btn-primary'>Details</button>
                             </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* SHARED MODAL (Outside the loop) */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-2xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    
                    <h1 className='text-2xl font-bold text-center mb-5'>Edit Your Property</h1>
                    
                    <form onSubmit={handleSubmit(onUpdateSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label font-semibold">Property Name</label>
                                <input {...register("propertyName")} className="input input-bordered w-full" required />
                                
                                <label className="label font-semibold mt-2">Price</label>
                                <input {...register("price")} type="number" className="input input-bordered w-full" required />
                                
                                <label className="label font-semibold mt-2">Category</label>
                                <select {...register("category")} className="select select-bordered w-full">
                                    <option value="Rent">Rent</option>
                                    <option value="Sale">Sale</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Land">Land</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="label font-semibold">Location</label>
                                <input {...register("location")} className="input input-bordered w-full" required />
                                
                                <label className="label font-semibold mt-2">Image Link</label>
                                <input {...register("imageLink")} className="input input-bordered w-full" required />
                                
                                <label className="label font-semibold mt-2">Description</label>
                                <textarea {...register("description")} className="textarea textarea-bordered w-full h-24" required></textarea>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-6">
                            <button type="submit" className="btn btn-success text-white w-1/2" disabled={updateMutation.isPending}>
                                {updateMutation.isPending ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default MyProperty;