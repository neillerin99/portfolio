import LinkChip from "@/components/LinkChip";
import Wrapper from "@/components/Wrapper";

export default function About() {
  return (
    <section>
      <Wrapper className="flex flex-col gap-5 text-white py-10">
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
          About Me
        </h2>
        <div className="text-gray-400 text-base sm:text-lg lg:text-xl sm:text-justify space-y-4">
          <p>
            I'm a Full Stack Web Developer from the Philippines with a passion
            for building responsive, high-performance applications that don't
            just work — they delight users. With experience across both frontend
            and backend development, I enjoy creating intuitive interfaces while
            making sure everything runs smoothly behind the scenes.
          </p>
          <p>
            Curious by nature, I'm constantly learning new technologies and
            refining my craft to stay ahead in the ever-evolving world of web
            development. My goal is simple: to build software that's functional,
            engaging, and meaningful.
          </p>
        </div>
        <div className="flex flex-row gap-4 sm:justify-start justify-between">
          <LinkChip
            className="text-white hover:text-gray-400"
            href="https://github.com/neillerin99"
          >
            <svg
              className="w-8 h-8 text-gray-400 "
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#99a1af">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
              </g>
            </svg>
            <span className="text-white">GitHub</span>
          </LinkChip>
          <LinkChip
            className="text-white hover:text-gray-400"
            href="http://www.linkedin.com/in/neil-edriane-lerin"
          >
            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 128 128">
              <path
                fill="#99a1af"
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              ></path>
              <path
                fill="#000000"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              ></path>
            </svg>
            <span className="text-white">LinkedIn</span>
          </LinkChip>
        </div>
      </Wrapper>
    </section>
  );
}
