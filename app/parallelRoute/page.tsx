'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <div className="flex align-center justify-center w-screen h-[100vh] relative">
        <Link href="/parallelRoute/hihi">
          <button>모달 열리냐</button>
        </Link>
      </div>
    </main>
  );
}
