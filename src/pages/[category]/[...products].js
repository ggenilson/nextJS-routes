import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();

  console.log('Here: ', router);

  return (
    <div>
      <h1>Produto {router.query.products}</h1>
    </div>
  );
}
