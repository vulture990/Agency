// import axios from 'axios';
// import React,{ useState} from 'react'
// import { Helmet } from 'react-helmet';
// import { Link, Redirect } from 'react-router-dom';





// const post =  async (title, description,need_type) =>  {
//      var axios = require('axios');
 
//      const body = JSON.stringify({ title, description,need_type });
//     var config = {
//         method: 'post',
//         url: `${process.env.REACT_APP_API_URL}/api/listings/create`,
//         headers: { 
//           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQwNzE5MTc0LCJpYXQiOjE2NDA3MTg4NzQsImp0aSI6ImRlMGMyYWFjMTcxMTQyMzA4MGMwODQ5ZjZmZGQzMGQ5IiwidXNlcl9pZCI6M30.Nt6URXICzwTjZzwqJVVt9xfTqe_zADtJ0XXRPCr08og', 
//           'Content-Type': 'application/json'
          
//         },
//         data : body
//       };

//       axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
      
//     // try {
//         // const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/listings/create`, body, config);
//         // console.log("it passed :)",res)
       
//     // } catch (err) {
//     //    console.log("error",err)
//     // }
// };


// function Post() {
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         need_type: '',
//     });

//     const { title, description, need_type } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = e => {
//         e.preventDefault();
//         post(title, description,need_type);
//     };
//     return (
//         <div>
//                  <div className='auth'>
//             <Helmet>
//                 <title>Water Agency - Home</title>
//                 <meta
//                     name='description'
//                     content='login page'
//                 />
//             </Helmet>
//             <h1 className='auth__title'>Post</h1>
//             <p className='auth__lead'>Post your needs for the Water Agency</p>
//             <form className='auth__form'  >
//             <div className='auth__form__group'>
//                     <input
//                         className='auth__form__input'
//                         placeholder='title '
//                         name='title'
//                         value={title}
//                         onChange={e => onChange(e)}
//                     />
//                 </div>
//                 <div className='auth__form__group'>
//                     <input
//                         className='auth__form__input'
//                         placeholder='description'
//                         name='description'
//                         value={description}
//                         onChange={e => onChange(e)}
//                     />
//                 </div>
//                 <div className='auth__form__group'>
//                     <input
//                         className='auth__form__input'
//                         placeholder='need type'
//                         name='need_type'
//                         value={need_type}
//                         onChange={e => onChange(e)}
//                     />
//                 </div>
//                 <button onSubmit={e => onSubmit(e)}   className='auth__form__button' >Pooooooost NOOOOOW</button>
//             </form>
//             post go here
//         </div>
            
//         </div>
//     )
// }

// export default Post


// // export default Post

// // import { connect } from 'react-redux';
// // import PropTypes from 'prop-types';
// // import { post } from '../actions/post';


// // Post.propTypes = {
// //     _post: PropTypes.func.isRequired,
// //     isPosted: PropTypes.bool
// // };

// // const mapStateToProps = state => ({
// //     isPosted: state.post.isPosted
// // });

// // export default connect(mapStateToProps, { 
// //     post })(Post);


import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Post = ({ setAlert }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        need_type: '',
        // message: ''
    });

    const { title, description, need_type } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        var token=localStorage.getItem('token')
        var config = {
            headers: {
                'Authorization': 'Bearer' +` ${token}`,
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post(`${process.env.REACT_APP_API_URL}/api/listings/create`, { title,description,need_type}, config)
        .then(res => {
            setAlert('Message Sent', 'success');
            setLoading(false);
            window.scrollTo(0, 0);
        })
        .catch(err => {
            setAlert('Error with Sending Message', 'error');
            setLoading(false);
            window.scrollTo(0, 0);
        })
    };

    return (
        <div className='contact'>
            <Helmet>
                <title>Realest Estate - POST</title>
                <meta
                    name='description'
                    content='Contact us'
                />
            </Helmet>
            <form className='contact__form' onSubmit={e => onSubmit(e)}>
            <h1 className="home">Welcome to Agence du Bassin Hydraulique du Guir Ziz Rheris </h1>
        <br></br>
        <h2 className="home">Citer Vos Besoin</h2>
                
                <label className='contact__form__label' htmlFor='title'>Title</label>
                <input 
                    className='contact__form__input' 
                    name='title' 
                    type='text' 
                    placeholder=' title' 
                    onChange={e => onChange(e)} 
                    value={title} 
                    required 
                />
              
                <label className='contact__form__label' htmlFor='description'>Description</label>
                <textarea 
                    className='contact__form__textarea'
                    name='description'
                    type='text' 
                    cols='30'
                    rows='10'
                    placeholder='description'
                    onChange={e => onChange(e)} 
                    value={description} 
                />
              
                <label className='contact__form__label' htmlFor='need_type'>Need Type</label>
                <input 
                    className='contact__form__input' 
                    name='need_type' 
                    type='text' 
                    placeholder='need type' 
                    onChange={e => onChange(e)} 
                    value={need_type} 
                    required 
                />
             
                {loading ?
                    <div className='contact__form__loader'>
                        <Loader
                            type="Oval"
                            color="#424242"
                            height={50}
                            width={50}
                        />
                    </div> :
                    <button className='contact__form__button' htmltype='submit'>Send</button>
                }
            </form>
        </div>
    );
};

Post.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Post);






