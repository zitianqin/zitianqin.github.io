export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <p className="text-xl text-gray-600 mb-8">
        You can reach me through any of the following channels:
      </p>
      <div className="prose prose-invert">
        <ul>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/zitian-qin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zitian Qin
            </a>{" "}
            (Preferred)
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
          <li>
            Email:{" "}
            <a href="mailto:zitianqinpublic@gmail.com">
              zitianqinpublic@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
