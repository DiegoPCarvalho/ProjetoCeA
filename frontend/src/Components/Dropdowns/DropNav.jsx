// import React from "react";
import React from 'react';
import './DropNav.css';



export default props =>
<div class="menu-drop">
<li class="item" id="mn1">
    <a class="btn" href="#mn1">
        <i className='fa fa-bar-chart fa-solid'></i>Contrato
    </a>
    <div class="submenu">
        <a href="#">Kullanıcı Listesi</a>
        <a href="#">Kullanıcı Ekle</a>
        <a href="#">Kullanıcı Sil</a>
    </div>
</li>
<li class="item" id="mn2">
    <a class="btn" href="#mn2">Dosyalar</a>
    <div class="submenu">
        <a href="#">Dosya Listesi</a>
        <a href="#">Dosya Ekle</a>
        <a href="#">Dosya Sil</a>
    </div>
</li>
<li class="item" id="mn3">
    <a class="btn" href="#mn3">Ayarlar</a>
    <div class="submenu">
        <a href="#">Kullanıcı Ayarları</a>
        <a href="#">Dosya Ayarları</a>
        <a href="#">Şifre</a>
    </div>
</li>
<li class="item" id="mn4">
    <a class="btn" href="#mn4">Ayarlar</a>
    <div class="submenu">
        <a href="#">Kullanıcı Ayarları</a>
        <a href="#">Dosya Ayarları</a>
        <a href="#">Şifre</a>
    </div>
</li>
</div>


    