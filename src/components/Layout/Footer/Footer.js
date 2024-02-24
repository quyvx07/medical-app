export default function Footer() {
  return (
    <footer className="footer py-[5.6rem] pl-[16rem] bg-ds-dark-500 text-xs-11 text-white">
      <nav className="flex flex-row flex-wrap gap-[4.5rem]">
        <a className="link link-hover">会員登録</a>
        <a className="link link-hover">運営会社</a>
        <a className="link link-hover">利用規約</a>
        <a className="link link-hover">個人情報の取扱について</a>
        <a className="link link-hover">特定商取引法に基づく表記</a>
        <a className="link link-hover">お問い合わせ</a>
      </nav>
    </footer>
  );
}
