import { getPostBySlug } from "../../../lib/api";
import mdToHtml from "../../../lib/mdToHtml";
import markdownStyles from "./markdown-styles.module.css";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "venue",
    "content",
    "coverImage",
    "price",
    "rating",
  ]);

  const content = await mdToHtml(post.content || "");

  return (
    <main className="flex justify-end align-start h-[calc(100vh-120px)]">
      <div className="fixed inset-0 w-1/2 flex flex-col justify-center px-8 py-4">
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={400}
          height={400}
          className="w-full"
        />
        <div className="w-full flex flex-col bg-dark text-light">
          <div className="flex gap-2 justify-between">
            <p className="text-md">{`${post.rating}/5`}</p>
            <p className="text-md">{`${post.venue}`}</p>
            <p className="text-md">{post.price}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-light w-1/2 px-8 py-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
        corporis eligendi! Itaque, doloribus quia molestias sunt dolore quidem
        quibusdam veritatis quis numquam earum consequuntur voluptatem corrupti
        qui deleniti sapiente possimus. Deserunt dolorem vitae odit ratione,
        cupiditate debitis consectetur aut eum error ducimus aliquam hic,
        suscipit nisi laudantium, odio velit repellendus neque nostrum explicabo
        soluta ut deleniti quas. Necessitatibus, id mollitia. Molestiae soluta
        incidunt et assumenda odio reiciendis commodi minus, ipsum impedit
        dolorem dolore earum, sint minima voluptas inventore corrupti quas atque
        voluptate a? Pariatur, tempore autem culpa perspiciatis eum porro.
        Voluptatibus expedita adipisci a. Corrupti voluptates eligendi ipsum sit
        tempore sequi expedita quod dolor? Sint suscipit maxime fuga, distinctio
        minima officia et sapiente harum ipsa voluptatem ea mollitia voluptas
        quisquam. Soluta deserunt, asperiores enim fugit earum voluptates
        veritatis consequuntur fugiat quae maiores saepe in? Maxime repudiandae
        asperiores similique, quam vel cum, voluptas saepe ex non beatae earum
        incidunt, temporibus voluptatem! In velit est aperiam minus pariatur
        voluptates iure nobis fuga sit. Cupiditate quaerat, cumque assumenda hic
        fugiat quasi minus provident natus aliquam perferendis voluptate.
        Architecto praesentium ad nobis earum eveniet. Autem eius odio quam
        maiores sapiente nihil harum tempora nostrum dolorem assumenda laborum
        ut ipsam numquam dolore optio architecto vero nam illum, explicabo
        maxime dolor distinctio. In laborum velit reiciendis. Obcaecati, atque
        aspernatur eaque dolor recusandae nemo accusantium ex voluptates odit
        repudiandae aliquid animi, consectetur suscipit necessitatibus,
        perferendis sit repellat? Accusantium incidunt dolorum temporibus
        veritatis perspiciatis, quis est ea aspernatur? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Error, corporis eligendi! Itaque,
        doloribus quia molestias sunt dolore quidem quibusdam veritatis quis
        numquam earum consequuntur voluptatem corrupti qui deleniti sapiente
        possimus. Deserunt dolorem vitae odit ratione, cupiditate debitis
        consectetur aut eum error ducimus aliquam hic, suscipit nisi laudantium,
        odio velit repellendus neque nostrum explicabo soluta ut deleniti quas.
        Necessitatibus, id mollitia. Molestiae soluta incidunt et assumenda odio
        reiciendis commodi minus, ipsum impedit dolorem dolore earum, sint
        minima voluptas inventore corrupti quas atque voluptate a? Pariatur,
        tempore autem culpa perspiciatis eum porro. Voluptatibus expedita
        adipisci a. Corrupti voluptates eligendi ipsum sit tempore sequi
        expedita quod dolor? Sint suscipit maxime fuga, distinctio minima
        officia et sapiente harum ipsa voluptatem ea mollitia voluptas quisquam.
        Soluta deserunt, asperiores enim fugit earum voluptates veritatis
        consequuntur fugiat quae maiores saepe in? Maxime repudiandae asperiores
        similique, quam vel cum, voluptas saepe ex non beatae earum incidunt,
        temporibus voluptatem! In velit est aperiam minus pariatur voluptates
        iure nobis fuga sit. Cupiditate quaerat, cumque assumenda hic fugiat
        quasi minus provident natus aliquam perferendis voluptate. Architecto
        praesentium ad nobis earum eveniet. Autem eius odio quam maiores
        sapiente nihil harum tempora nostrum dolorem assumenda laborum ut ipsam
        numquam dolore optio architecto vero nam illum, explicabo maxime dolor
        distinctio. In laborum velit reiciendis. Obcaecati, atque aspernatur
        eaque dolor recusandae nemo accusantium ex voluptates odit repudiandae
        aliquid animi, consectetur suscipit necessitatibus, perferendis sit
        repellat? Accusantium incidunt dolorum temporibus veritatis
        perspiciatis, quis est ea aspernatur?
      </div>
    </main>
  );
}
