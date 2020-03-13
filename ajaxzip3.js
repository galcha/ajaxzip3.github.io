/* ================================================================ *
    ajaxzip3.js ---- AjaxZip3 郵便番号→住所変換ライブラリ

    Copyright (c) 2008-2015 Ninkigumi Co.,Ltd.
    http://ajaxzip3.github.io/

    Copyright (c) 2006-2007 Kawasaki Yusuke <u-suke [at] kawa.net>
    http://www.kawa.net/works/ajax/AjaxZip2/AjaxZip2.html

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
* ================================================================ */
function $yubin(a){AjaxZip3.callback(a)}AjaxZip3=function(){},AjaxZip3.VERSION="0.51",AjaxZip3.JSONDATA="https://yubinbango.github.io/yubinbango-data/data",AjaxZip3.CACHE=[],AjaxZip3.prev="",AjaxZip3.nzip="",AjaxZip3.fzip1="",AjaxZip3.fzip2="",AjaxZip3.fpref="",AjaxZip3.addr="",AjaxZip3.fstrt="",AjaxZip3.farea="",AjaxZip3.ffocus=!0,AjaxZip3.onSuccess=null,AjaxZip3.onFailure=null,AjaxZip3.PREFMAP=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],AjaxZip3.zip2addr=function(a,e,i,p,t,n,r){if(AjaxZip3.fzip1=AjaxZip3.getElementByName(a),AjaxZip3.fzip2=AjaxZip3.getElementByName(e,AjaxZip3.fzip1),AjaxZip3.fpref=AjaxZip3.getElementByName(i,AjaxZip3.fzip1),AjaxZip3.faddr=AjaxZip3.getElementByName(p,AjaxZip3.fzip1),AjaxZip3.fstrt=AjaxZip3.getElementByName(n,AjaxZip3.fzip1),AjaxZip3.farea=AjaxZip3.getElementByName(t,AjaxZip3.fzip1),AjaxZip3.ffocus=void 0===r||r,AjaxZip3.fzip1&&AjaxZip3.fpref&&AjaxZip3.faddr){var A=AjaxZip3.fzip1.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g,hankaku_eisu);if(AjaxZip3.fzip2&&AjaxZip3.fzip2.value&&(A+=AjaxZip3.fzip2.value),A){AjaxZip3.nzip="";for(var f=0;f<A.length;f++){var x=A.charCodeAt(f);x<48||57<x||(AjaxZip3.nzip+=A.charAt(f))}if(!(AjaxZip3.nzip.length<7)){var j=AjaxZip3.nzip.substr(0,3),Z=AjaxZip3.CACHE[j];if(Z)return AjaxZip3.callback(Z);AjaxZip3.zipjsonpquery()}}}},AjaxZip3.callback=function(a){function e(){"function"==typeof AjaxZip3.onFailure&&AjaxZip3.onFailure()}var i=a[AjaxZip3.nzip],p=+AjaxZip3.nzip+4278190080+"";if(!i&&a[p]&&(i=a[p]),i){var t=i[0];if(t){var n=AjaxZip3.PREFMAP[t];if(n){var r=i[1];r=r||"";var A=i[2];A=A||"";var f=i[3];f=f||"";var x=AjaxZip3.faddr,j=r;if("select-one"==AjaxZip3.fpref.type||"select-multiple"==AjaxZip3.fpref.type)for(var Z=AjaxZip3.fpref.options,u=0;u<Z.length;u++){var l=Z[u].value,o=Z[u].text;Z[u].selected=l==t||l==n||o==n}else AjaxZip3.fpref.name==AjaxZip3.faddr.name?j=n+j:AjaxZip3.fpref.value=n;if(AjaxZip3.farea?(x=AjaxZip3.farea,AjaxZip3.farea.value=A):j+=A,AjaxZip3.fstrt&&(x=AjaxZip3.fstrt,AjaxZip3.faddr.name==AjaxZip3.fstrt.name?j+=f:f&&(AjaxZip3.fstrt.value=f)),AjaxZip3.faddr.value=j,"function"==typeof AjaxZip3.onSuccess&&AjaxZip3.onSuccess(),AjaxZip3.ffocus&&x&&x.value){var s=x.value.length;if(x.focus(),x.createTextRange){var c=x.createTextRange();c.move("character",s),c.select()}else x.setSelectionRange&&x.setSelectionRange(s,s)}}else e()}else e()}else e()},AjaxZip3.getResponseText=function(a){var e=a.responseText;if(-1<navigator.appVersion.indexOf("KHTML")){var i=escape(e);i.indexOf("%u")<0&&-1<i.indexOf("%")&&(e=decodeURIComponent(i))}return e},AjaxZip3.getElementByName=function(a,e){if("string"==typeof a){var i=document.getElementsByName(a);if(!i)return null;if(!(1<i.length&&e&&e.form))return i[0];for(var p=e.form.elements,t=0;t<p.length;t++)if(p[t].name==a)return p[t]}return a},AjaxZip3.zipjsonpquery=function(){var a=AjaxZip3.JSONDATA+"/"+AjaxZip3.nzip.substr(0,3)+".js",e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("charset","UTF-8"),e.setAttribute("src",a),document.getElementsByTagName("head").item(0).appendChild(e)};var hankaku_eisu=function(a){return a?String.fromCharCode(a.charCodeAt(0)-65248):""};
