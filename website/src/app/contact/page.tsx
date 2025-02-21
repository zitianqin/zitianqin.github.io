export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="prose dark:prose-invert">
        <p>You can reach me through any of the following channels:</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:zitianqinpublic@gmail.com">
              zitianqinpublic@gmail.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/zitianqin"
              target="_blank"
              rel="noopener noreferrer"
            >
              @zitianqin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
