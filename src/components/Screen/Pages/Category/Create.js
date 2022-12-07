import React, { useState } from "react";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import axios from "axios"
import Loading from "../Loading";

const CreateCategory = () => {
    const [loading, setLoading] = useState(false)
    const [category, setCategoryName] = useState('');
    const [slug, setSlugName] = useState('');
    const handleCreateCategory = async () => {
        try {
            setLoading(true)
            await axios.post(`https://api.escuelajs.co/api/v1/categories`, {
                name: category,
                image: "https://burst.shopifycdn.com/photos/crowd-participating-at-event.jpg?width=1200&format=pjpg&exif=1&iptc=1"
            }, []).then(() => {
                setLoading(false)
                setCategoryName()
                setSlugName()
            })


        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="bg-white shadow-sm p-4 rounded-lg max-w-4xl">
                <div>
                    <h2 className="my-3">Category</h2>
                    <Input onChange={(e) => setCategoryName(e.target.value)} />
                </div>
                <div>
                    <h2 className="my-3">Slug (URL)</h2>
                    <Input onChange={(e) => setSlugName(e.target.value)} />
                </div>
                <div className="flex justify-start mt-4">
                    <Button type="button" className="bg-success text-white px-5" onClick={handleCreateCategory}>
                        Save
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CreateCategory