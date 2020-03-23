import React from "react";
import c from "./Content.module.css";
import Content_block from "./Content_block";

let arr = [
  {
    pos: "24",
    stat: "Доступний",
    name: "Лозовий Юрій",
    surname: "Володимирович",
    kab: "102"
  },
  {
    pos: "1",
    stat: "Доступний",
    name: "Москаленко Дмитро",
    surname: "Миколайович",
    kab: "345"
  },
  {
    pos: "99",
    stat: "Не доступний",
    name: "Філатова Ірина",
    surname: "Миколаївна",
    kab: "123",
    more: ", дитячий невропатолог"
  },
  {
    pos: "11",
    stat: "Не доступний",
    name: "Омельяненко Анатолій",
    surname: "Анатолійович",
    kab: "501"
  }
];

const Content = props => {
  return (
    <div className={c.main_items}>
      <div className={c.all}>
        <h3 className={c.doctors}>Лікарі</h3>
        <p className={c.all_doctors}>
          ВСІ <span>ЛІКАРІ</span>
        </p>
      </div>

      <div className={c.all_content_block}>
        <div className={c.block}>
          <Content_block
            pos={arr[0].pos}
            stat={arr[0].stat}
            name={arr[0].name}
            surname={arr[0].surname}
            kab={arr[0].kab}
          />
        </div>
        <div className={c.block_1}>
          <Content_block
            pos={arr[1].pos}
            stat={arr[1].stat}
            name={arr[1].name}
            surname={arr[1].surname}
            kab={arr[1].kab}
          />
        </div>
        <div className={c.block_2}>
          <Content_block
            pos={arr[2].pos}
            stat={arr[2].stat}
            name={arr[2].name}
            surname={arr[2].surname}
            kab={arr[2].kab}
            more={arr[2].more}
          />
        </div>
        <div className={c.block_3}>
          <Content_block
            pos={arr[3].pos}
            stat={arr[3].stat}
            name={arr[3].name}
            surname={arr[3].surname}
            kab={arr[3].kab}
          />
        </div>
      </div>

      <div>
        <div className={c.arrow_posititon}>
          <a href="#" className={c.left_arrow}></a>
          <a href="#" className={c.right_arrow}></a>
        </div>

        <div className={c.point_position}>
          <a href="#" className={c.point}></a>
          <a href="#" className={c.point1}></a>
          <a href="#" className={c.point2}></a>
          <a href="#" className={c.point3}></a>
        </div>
      </div>
    </div>
  );
};

export default Content;
