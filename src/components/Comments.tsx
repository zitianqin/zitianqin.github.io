'use client';

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="zitianqin/zitianqin.github.io"
      repoId="R_kgDONU5t_g"
      category="Announcements"
      categoryId="DIC_kwDONU5t_s4Ckl_D"
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
