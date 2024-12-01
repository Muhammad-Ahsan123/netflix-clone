import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setModalState } from '../redux/Slices/moviesSlice';
import VideoBackground from './VideoBackground';
const MovieModal = () => {
    const [loading, setLoading] = useState(false);
    const { openMovieModal, id } = useSelector((state) => state.movie)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(setModalState(false))
    }
    return (
        <>

            <Modal
                className=''
                open={openMovieModal}
                title="Title"
                onCancel={handleClose}
                onOk={handleClose}
                footer={[
                    <Button key="submit" type="primary" loading={loading} onClick={handleClose}>
                        Cancel
                    </Button>
                ]}
            >
                <VideoBackground movieId={id} customWidthHeight={true} />
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default MovieModal;