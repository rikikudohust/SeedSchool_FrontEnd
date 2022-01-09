import React, { useEffect, useState } from "react";
//import classes from "../../assets/CSS/admin/Day.module.css";
import styled from "styled-components";
import { Create } from "@mui/icons-material";
import button from "../../assets/CSS/general/AddButton.module.css";

const Day = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");

    script.src = "../../../../public/js/jquery.min.js";
    script.async = true;
    script2.src = "../../../../public/js/paging.js";
    script2.async = true;
    script3.src = "../../../../public/js/edit.js";
    script3.async = true;

    document.body.appendChild(script);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    return () => {
      document.body.removeChild(script3);
      document.body.removeChild(script2);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* <div className={classes.container}>
        <a href="#" id="editing_button">
          <img src="iconEdit.png" alt="" width="200" height="200" />
        </a>

        <div classname={classes.tm_paging_link}>
          <nav>
            <ul>
              <li classname={classes.tm_paging_item}>
                <a
                  href="#"
                  classname={classes.tm_paging_link}
                  className={classes.active}
                >
                  Breakfast
                </a>
              </li>
              <li classname={classes.tm_paging_item}>
                <a href="#" classname={classes.tm_paging_link}>
                  Lunch
                </a>
              </li>
              <li classname={classes.tm_paging_item}>
                <a href="#" classname={classes.tm_paging_link}>
                  Dinner
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div classname={classes.row} classname={classes.tm_gallery}>
          <div
            id="tm_gallery_page_breakfast"
            classname={classes.tm_gallery_page}
          >
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="./././assets/DummyData/Admin/ImageMenu/gallery/01.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Fusce dictum finibus
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$45 / $55</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/02.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Aliquam sagittis</h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$65 / $70</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/03.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Sed varius turpis
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$30.50</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/04.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Aliquam sagittis</h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$25.50</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/05.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Maecenas eget justo
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$80.25</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/06.jpg"
                  alt="Image"
                  class="img_fluid:"
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Quisque et felis eros
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$20 / $40 / $60</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/07.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Sed ultricies dui
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$94</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/08.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Donec porta consequat
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Nam in suscipit nisi, sit amet consectetur metus. Ut sit
                    amet tellus accumsan
                  </p>
                  <p className={classes.tm_gallery_price}>$15</p>
                </figcaption>
              </figure>
            </article>
          </div>

          <div
            id="tm_gallery_page_lunch"
            className={classes.tm_gallery_page}
            className={classes.hidden}
          >
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/04.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Salad Menu One</h4>
                  <p className={classes.tm_gallery_description}>
                    Proin eu velit egestas, viverra sapien eget, consequat nunc.
                    Vestibulum tristique
                  </p>
                  <p className={classes.tm_gallery_price}>$25</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/03.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Second Title Salad
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Proin eu velit egestas, viverra sapien eget, consequat nunc.
                    Vestibulum tristique
                  </p>
                  <p className={classes.tm_gallery_price}>$30</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/05.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Third Salad Item</h4>
                  <p className={classes.tm_gallery_description}>
                    Proin eu velit egestas, viverra sapien eget, consequat nunc.
                    Vestibulum tristique
                  </p>
                  <p className={classes.tm_gallery_price}>$45</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/01.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Superior Salad</h4>
                  <p className={classes.tm_gallery_description}>
                    Proin eu velit egestas, viverra sapien eget, consequat nunc.
                    Vestibulum tristique
                  </p>
                  <p className={classes.tm_gallery_price}>$50</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/08.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Sed ultricies dui
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Proin eu velit egestas, viverra sapien eget, consequat nunc.
                    Vestibulum tristique
                  </p>
                  <p className={classes.tm_gallery_price}>$55 / $60</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/07.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Maecenas eget justo
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Proin eu velit egestas, viverra sapien eget, consequat nunc.
                    Vestibulum tristique
                  </p>
                  <p className={classes.tm_gallery_price}>$75</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/07.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Maecenas eget justo
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Proin eu velit egestas, viverra sapien eget, consequat nunc.
                    Vestibulum tristique
                  </p>
                  <p className={classes.tm_gallery_price}>$75</p>
                </figcaption>
              </figure>
            </article>
          </div>

          <div
            id="tm_gallery_page_dinner"
            className={classes.tm_gallery_page}
            className={classes.hidden}
          >
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/08.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Noodle One</h4>
                  <p className={classes.tm_gallery_description}>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                  <p className={classes.tm_gallery_price}>$12.50</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/07.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Noodle Second</h4>
                  <p className={classes.tm_gallery_description}>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                  <p className={classes.tm_gallery_price}>$15.50</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/06.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Third Soft Noodle
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                  <p className={classes.tm_gallery_price}>$20.50</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/05.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>Aliquam sagittis</h4>
                  <p className={classes.tm_gallery_description}>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                  <p className={classes.tm_gallery_price}>$30.25</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/04.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Maecenas eget justo
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                  <p className={classes.tm_gallery_price}>$35.50</p>
                </figcaption>
              </figure>
            </article>
            <article
              className={classes.col_lg_3}
              className={classes.col_md_4}
              className={classes.col_sm_6}
              className={classes.col_12}
              className={classes.tm_gallery_item}
            >
              <figure>
                <img
                  src="img/gallery/03.jpg"
                  alt="Image"
                  className={classes.img_fluid}
                  className={classes.tm_gallery_img}
                />
                <figcaption>
                  <h4 className={classes.tm_gallery_title}>
                    Quisque et felis eros
                  </h4>
                  <p className={classes.tm_gallery_description}>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </p>
                  <p className={classes.tm_gallery_price}>$40.50</p>
                </figcaption>
              </figure>
            </article>

            <div className={classes.popup}>
              <div className={classes.popup_content}>
                <h2 id="popup_title">Chỉnh sửa thực đơn</h2>
                <div className={classes.flex_container}>
                  <form action="#">
                    <div className={classes.radioPick}>
                      <div id="radioWrapper">
                        <input
                          type="checkbox"
                          id="breakfast1"
                          name="breakfast1"
                          value=""
                        />
                        <label className={classes.lblRadio} for="breakfast1">
                          {" "}
                          Breakfast{" "}
                        </label>
                        <input
                          type="checkbox"
                          id="lunch1"
                          name="lunch1"
                          value=""
                        />
                        <label className={classes.lblRadio} for="lunch1">
                          {" "}
                          Lunch{" "}
                        </label>
                        <input
                          type="checkbox"
                          id="dinner1"
                          name="dinner1"
                          value=""
                        />
                        <label className={classes.lblRadio} for="dinner1">
                          {" "}
                          Dinner{" "}
                        </label>
                      </div>
                    </div>
                    <div className={classes.inputInfor}>
                      <input
                        type="text"
                        class="inputControl"
                        placeholder="Tên món ăn"
                      />
                    </div>
                    <div className={classes.inputInfor}>
                      <input
                        type="text"
                        class="inputControl"
                        placeholder="Giá"
                      />
                    </div>
                    <div className={classes.inputInfor}>
                      <textarea
                        name=""
                        id="txtDescription"
                        rows="6 "
                        placeholder="Giới thiệu"
                      ></textarea>
                    </div>
                  </form>
                  <div className={classes.inputFile}>
                    <input type="file" />
                  </div>
                </div>
                <div className={classes.btn_container}>
                  <button class="addBtn">Thêm</button>
                </div>
                <button className={classes.cancel__Btn}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Day;
