/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { useCreateTestimonialMutation } from "@/redux/features/testimonials/testimonialApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const CreateTestimonial = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
    const [createTestimonial] = useCreateTestimonialMutation();
  
    const { user } = useAppSelector((state) => state.auth);
  
    const onSubmit = async (data: any) => {
      try {
        const payload = {
          ...data,
          email: user?.email,
          name: user?.name,
          image: user?.image,
          rating: Number(data.rating),
        };
        const res = await createTestimonial(payload).unwrap();
        toast.success("Testimonial submitted!");
        reset();
        navigate("/")
      } catch (err) {
        toast.error("Something went wrong!");
      }
    };
  
    return (
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Submit Your Testimonial
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              value={user?.name || ""}
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100"
            />
          </div>
  
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100"
            />
          </div>
  
          <div>
            <label className="text-sm font-medium">Image URL</label>
            <input
              type="text"
              value={user?.image || ""}
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100"
            />
          </div>
  
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full border px-4 py-2 rounded"
            ></textarea>
          </div>
  
          <div>
            <label className="text-sm font-medium">Rating (1-5)</label>
            <input
              type="number"
              min={1}
              max={5}
              {...register("rating", { required: true })}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white py-2 rounded"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    );
  };
  

export default CreateTestimonial;
