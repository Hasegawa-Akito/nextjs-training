import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  const { id } = router.query; // 分割代入
  return (
    <div>
      <Link href="example">example</Link>
      <h1>{id}</h1>
    </div>
  );
}
