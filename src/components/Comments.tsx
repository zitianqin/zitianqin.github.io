'use client';

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="zitianqin/zitianqin.github.io"
      repoId="R_kgDOJMw0Wg"
      category="Announcements"
      categoryId="DIC_kwDOJMw0Ws4CzL3C"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
}
