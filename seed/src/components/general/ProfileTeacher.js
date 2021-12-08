import React from "react";
import classes from '../../assets/CSS/general/ProfileTeacher.module.css'
import avatar from '../../assets/Icons/teacher.jpg'

const ProfileTeacher = props => {
    return <>
        <div className={classes.profile}>
            <div className={classes.profile_body}>

                <div className={classes.details_profile}>
                    <div className={classes.background_name}>
                        <div className={classes.name}>
                            <h1 className={classes.name_teacher}>NGUYỄN VĂN ĐỨC</h1>
                            <p>Hiệu phó</p>
                        </div>
                    </div>
                    <div className={classes.information}>
                        <h2 className="profile_title details_title">THÔNG TIN CƠ BẢN</h2>
                        <p className={classes.details_content}><i className={classes['ti-bolt']}></i> Là giáo viên trông trẻ suất sắc, có kinh nghiệm trông trẻ hơn 30 năm.
                            Là 1 người tâm huyết với nghề và được nhiều phụ huynh ưa thích. Đạt
                            thành tích giáo viên trông trẻ cấp tỉnh. </p>
                        <p className={classes.details_content}><i className={classes['ti-bolt']}></i> Đạt được 1 số giải thưởng lớn
                            cấp thành phố như: ru ngủ trẻ cấp tốc, biếng ăn không đáng lo ngại,
                            dỗ trẻ siêu tốc,...</p>
                        <div className={classes.class_master}>
                            <p className={classes.class_master_title}>Lớp phụ trách</p>
                            <p><i className={classes['ti-control-play']}></i> 3B</p>
                        </div>
                    </div>
                    <div className={classes.comment}>
                        <p className={classes.comment_title}>Nhận xét</p>
                        <ul className={classes.comment_content}>
                            <li className={classes.comment_item}>
                                <div className={classes.avatar_commentator}><img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/245641708_1297690420667046_7433736795047797785_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IYggQfvbZscAX9Wrrn8&_nc_ht=scontent.fhan4-3.fna&oh=e627f95db9b65443cbc4f0bc51ee6ecd&oe=61ACC964" alt="" /></div>
                                <div className={classes.item_content}>
                                    <h3 className={classes.commentator}>Đào Xuân An</h3>
                                    <p className={classes.content}>Cô này dạy vip pờ rồ</p>
                                </div>
                            </li>
                            <li className={classes.comment_item}>
                                <div className={classes.avatar_commentator}><img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/245641708_1297690420667046_7433736795047797785_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IYggQfvbZscAX9Wrrn8&_nc_ht=scontent.fhan4-3.fna&oh=e627f95db9b65443cbc4f0bc51ee6ecd&oe=61ACC964" alt="" /></div>
                                <div className={classes.item_content}>
                                    <h3 className={classes.commentator}>Đào Xuân An</h3>
                                    <p className={classes.content}>Cô này dạy vip pờ rồ</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classes.introduce_profile}>
                    <div className={classes.body_img}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={classes.contact}>
                        <h2 className={classes.profile_title}>THÔNG TIN LIÊN HỆ</h2>
                        <p className={classes.profile_content}><i className={classes['ti-mobile']}></i> 0931746JQK</p>
                        <p className={classes.profile_content}><i className={classes['ti-email']}></i> ducvippro@gmail.com</p>
                    </div>
                    <div className={classes.education}>
                        <h2 className={classes.profile_title}>HỌC VẤN</h2>
                        <p className={classes.profile_content}><i className={classes['ti-star']}></i> Tốt nghiệp loại giỏi đại học sư phạm Hà Nội</p>
                    </div>
                    <div className={classes.position}>
                        <h2 className={classes.profile_title}>CHỨC VỤ</h2>
                        <p className={classes.profile_content}><i className={classes['ti-medall']}></i> Hiệu phó</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProfileTeacher