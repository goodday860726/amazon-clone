import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id="1601385888"
          title="AmazonBasics Lightweight Super Soft Easy Care Microfiber Sheet Set with 16'' Deep Pockets - Twin, Dark Grey"
          price={14.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71f8d7Y6EUL._AC_SL1500_.jpg"
        />
        <Product
          id="1601385997"
          title="AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White"
          price={34.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71JHDQfKgUL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1601385997"
          title="AmazonBasics Slim Carry On Travel Backpack"
          price={20.71}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/A166C71eR-L._AC_UL1500_.jpg"
        />
        <Product
          id="123"
          title="MIRIPARIS(ミリパリ) アニメ コスプレ メイド服【Re:0から始まる異世界生活】黒 Sサイズ ラム風 レム風 傑作 オリジナル コスチューム 乙女心に潜む小悪魔 仮装"
          price={45.00}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71WsRiBdcLL._AC_SL1500_.jpg"
        />
        <Product
          id="123"
          title="MIRIPARIS(ミリパリ) アニメ コスプレ メイド服【Re:0から始まる異世界生活】黒 Sサイズ ラム風 レム風 傑作 オリジナル コスチューム 乙女心に潜む小悪魔 仮装"
          price={43.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71WsRiBdcLL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1601385997"
          title="AmazonBasics Grip Kit for Nintendo Switch Joy-Con Controllers - Red"
          price={14.55}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61l1BXNnl%2BL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home
