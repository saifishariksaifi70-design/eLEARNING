import { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5"
import { FaPlus, FaStar } from 'react-icons/fa'

function Testimonial() {

    const [showForm, setShowForm] = useState(false)
    const [reviews, setReviews] = useState([])

    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 5
    })
    const getReview = async () => {
        const res = await fetch('http://localhost:3000/api/review')
        const data = await res.json()
        setReviews(data)
    }
    useEffect(() => {
        getReview()
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name || !formData.review || !formData.rating) {
            alert("Please fill all fields")
            return
        }

        await fetch('http://localhost:3000/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        setFormData({
            name: '',
            review: '',
            rating: 5
        })


        setShowForm(false)
        getReview()
    }

    return (
        <section className="relative p-10">
            <h1 className="text-xl text-sky-300 text-center font-semibold">
                TESTIMONIAL
            </h1>
            <h1 className="text-4xl text-center font-semibold">
                Our Students Say!
            </h1>

            {/* Plus Button */}
            <button
                onClick={() => setShowForm(true)}
                className="absolute top-5 right-5 bg-sky-400 text-white p-3 rounded-full"
            >
                <FaPlus />
            </button>

            {/* Form */}
            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto mt-10 flex flex-col gap-4"
                >
                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="absolute top-30 right-120 text-2xl cursor-pointer"
                    >
                        <IoClose size={25} className='' />
                    </button>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-3"
                    />

                    <textarea
                        name="review"
                        placeholder="Your Review"
                        value={formData.review}
                        onChange={handleChange}
                        className="border p-3"
                    />

                    <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        value={formData.rating}
                        onChange={handleChange}
                        className="border p-3"
                    />

                    <button
                        type="submit"
                        className="bg-sky-400 text-white py-3"
                    >
                        Submit Review
                    </button>

                </form>
            )}
            {/* Cards */}
            <div className="overflow-hidden mt-10">
                <div className="testimonial-slider">

                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            className="w-[460px] shrink-0 bg-amber-100 p-6 rounded-xl shadow"
                        >
                            <div className="flex gap-1 text-yellow-400 mb-3">
                                {Array.from({ length: Number(item.rating) }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-5">
                                {item.review}
                            </p>

                            <h2 className="font-bold text-lg">
                                {item.name}
                            </h2>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Testimonial