import { TextareaAutosize } from '@material-ui/core';
import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import useAuth from '../../../useContext/useAuth/useAuth';

const AddReview = () => {
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [value, setValue] = useState(0);
    const [review, setReview] = useState('');
    const { user } = useAuth();

    const onSubmit = (e) => {
        setVerifyLoading(true);
        const reviewData = { name: user.displayName, email: user.email, review: review, rating: value }
        axios.post('https://tranquil-forest-55294.herokuapp.com/reviews', reviewData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review done!')
                    e.target.reset();
                    setVerifyLoading(false);
                }

            }).finally(() => {
                setVerifyLoading(false);
            })

        e.preventDefault();
    };

    const button = {
        padding: '10px 25px',
        margin: '20px 5px',
        fontWeight: 'bold',
        color: '#11A0DB',
        cursor: 'pointer'
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 >Add a Review</h1>
            <br />
            <form onSubmit={onSubmit}>
                <TextareaAutosize
                    required
                    aria-label="minimum height"
                    minRows={8}
                    style={{ width: '220px' }}
                    placeholder="Write a review"
                    onChange={(e) => {
                        setReview(e.target.value);
                    }}
                />
                <br />
                <br />
                <h4>Set Rating</h4>
                <Rating
                    required
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />


                <br />
                {
                    verifyLoading ? <Loading />
                        :
                        <input style={button} type="submit" value="Submit Review" />
                }
            </form>
        </div>
    );
};

export default AddReview;