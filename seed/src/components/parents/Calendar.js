// import "./styles.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import InfiniteCalendar from "react-infinite-calendar";
// import "react-infinite-calendar/styles.css";
// import classes from '../../assets/CSS/parents/Calendar.module.css'


// var d = new Date(),
//     month = '' + (d.getMonth() + 1),
//     day = '' + d.getDate(),
//     year = d.getFullYear();

// if (month.length < 2)
//     month = '0' + month;
// if (day.length < 2)
//     day = '0' + day;

// const formatDate = year + '-' + month + '-' + day;

// export default function Calendar() {
//     // const [date, setDate] = useState('');
//     // const [image, setImage] = useState('http://127.0.0.1:8000/static/post_images/nodata_found.png');
//     // const [comment, setComment] = useState('');

//     // //Lay thong tin diem danh ngay luc dau
//     // useEffect(async () => {
//     //     const data = {
//     //         "date": formatDate
//     //     };
//     //     console.log(date);
//     //     try {
//     //         const res = await axios.post("http://127.0.0.1:8000/students/" + localStorage.getItem('id') + "/attend", data);
//     //         if (res.data.image == null) setImage(('http://127.0.0.1:8000/static/post_images/nodata_found.png'));
//     //         else setImage(`http://127.0.0.1:8000/static/${res.data.image}`);
//     //         setComment(res.data.comment);
//     //         console.log(res.data)
//     //     } catch {
//     //         console.log('Error');
//     //     }

//     // }, [])

//     // //Lay thong tin diem danh khi click vao calendar
//     // useEffect(async () => {
//     //     const data = {
//     //         "date": date
//     //     };
//     //     console.log(date);
//     //     try {
//     //         const res = await axios.post("http://127.0.0.1:8000/students/" + localStorage.getItem('id') + "/attend", data);
//     //         if (res.data.image == null) setImage(('http://127.0.0.1:8000/static/post_images/nodata_found.png'));
//     //         else setImage(`http://127.0.0.1:8000/static/${res.data.image}`);
//     //         setComment(res.data.comment);
//     //         console.log(res.data)
//     //     } catch {
//     //         console.log('Error');
//     //     }
//     // }, [date])

//     // const onSelect = (event) => {
//     //     setDate(event.getFullYear() + '-' + (event.getMonth() + 1) + '-' + event.getDate());
//     // }



//     // return (
//     //     <div className={classes.container}>
//     //         <InfiniteCalendar width="70%" height={640}
//     //             rowHeight={100}
//     //             onSelect={onSelect}
//     //             showHeader={false}
//     //             showOverlay={false}
//     //             showWeekdays={false} />
//     //         <div className={classes.info}>
//     //             <div className={classes.img_place}>
//     //                 <img src={image} alt="here" />
//     //             </div>
//     //             <div className={classes.comment}>
//     //                 <h2>Nhận xét của giáo viên</h2>
//     //                 <p>{comment}</p>
//     //             </div>
//     //             <button>
//     //                 Xin nghỉ
//     //             </button>
//     //         </div>
//     //     </div>

//     );
// }

export default function Calendar() {
    return <></>
}