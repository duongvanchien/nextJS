import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <div>
      <Head>
        <title>Trang chủ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Đăng nhập thành công</h1>
        <Link href="/login">
          <a>Đăng xuất</a>
        </Link>
      </div>
    </div>
  );
};
