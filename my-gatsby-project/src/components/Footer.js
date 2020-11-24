import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">連絡先</h2>
        <p>
        お問い合わせより取得しましたご利用者様のお名前、ご連絡先電話番号、回答先メールアドレスなどの個人情報（その他ご利用者様からいただいた情報のうち個人情報に該当するものを含む）及びお問い合わせの内容の利用目的は次のとおりです。
        </p>
        <p>
        ・ご意見、ご要望、お問い合わせへの対応および確認 
        </p>
        <p>
        ・当団体の活動改善のための分析
        </p>
        <p>
        お問い合わせの内容によっては、適切な回答を行うため、必要に応じて関係各社などへ転送し、確認および回答をさせていただく場合がございますので、あらかじめご了承ください。
        当団体は、個人情報の流出・漏洩の防止、その他個人情報の安全管理のために必要かつ適切な措置を講じるものとし、法令などに正当な理由がある場合を除き、ご利用者様の同意なく目的外での利用および第三者への提供は行いません。

        </p>
        <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">氏名</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">メールアドレス</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">内容</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="送信" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
