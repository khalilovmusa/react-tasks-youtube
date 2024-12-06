import { useState } from 'react';

const OnChange = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const handleShipping = (e) => {
        setShipping(e.target.value);
    }

    return (
        <>
            <input value={name} type="text" onChange={(e) => handleNameChange(e)} />
            <p>Name: {name}</p>

            <input value={quantity} type='number' onChange={(e) => handleQuantityChange(e)} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={(e) => handleCommentChange(e)} placeholder='Your comment here!' />
            <p>{comment}</p>

            <select value={payment} onChange={(e) => handlePaymentChange(e)} >
                <option value="" >Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>{payment}</p>

            <label>
                <input type='radio' value="Pick Up" checked={shipping === "Pick Up"}  onChange={(e) => handleShipping(e)} />
                Pick Up
            </label>
            <label>
                <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={(e) => handleShipping(e)} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    )
}

export default OnChange;