import Koa from 'koa'
import serve from 'koa-static'
import route from 'koa-route'

import {assetsPath} from '../../project.config'
import reactMiddlware from './reactMiddleware'

const app = new Koa()
const port = 4000

app.use(serve(assetsPath))

app.use(route.get('/api/content', ctx => {
  const title = 'Awesome title'

  ctx.body = {
    title,
    content: {
      title,
      paragraphs: Array(35).fill('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam soluta, consectetur numquam repellendus culpa asperiores facere iusto. Quibusdam accusantium veritatis officia ad numquam, ut autem magnam nostrum aliquam minima, sunt porro culpa laboriosam et dolorem voluptates pariatur dicta quaerat maxime aut repellendus quidem aliquid. Facere, et. Inventore dolorum similique, quas dolores consequatur temporibus quidem, rerum qui neque magnam, numquam, in sit culpa corrupti sunt itaque id earum dolore quia nobis quo? Ipsa commodi iure et quaerat velit impedit sed vel. Quis debitis eaque necessitatibus. Aut sunt sit, id recusandae vitae ex corrupti laboriosam dolore veritatis necessitatibus quae commodi, aliquam hic doloribus nobis cupiditate, tempora minus distinctio dignissimos. Dolorum pariatur rerum inventore, sint quia quasi distinctio, fuga omnis amet laudantium minima cum beatae maxime rem aspernatur veniam illum ab modi! Aperiam ipsa, maiores repudiandae praesentium omnis quod? Sed aspernatur quam nulla asperiores accusantium, animi possimus veritatis earum accusamus adipisci iste odit itaque consequatur impedit id odio quo praesentium, totam, ducimus enim! Eos, est facilis sequi omnis pariatur voluptate quo non, quasi similique vitae temporibus, sed dolor saepe autem totam dolores minus eius quia. Laboriosam itaque est quae amet nesciunt dolore incidunt quia ratione aliquam omnis provident iure rem, ipsum id hic odio quasi praesentium velit animi perferendis repellendus. Blanditiis, deleniti, eos. Natus libero delectus ex omnis fugit itaque voluptates incidunt adipisci sed, et quidem quasi laboriosam voluptas nobis, deleniti ipsum provident, doloribus quo asperiores aperiam, soluta error. Laudantium ratione soluta distinctio facere veritatis eaque quo, molestias, itaque unde dolorem cumque dolorum nulla similique, deleniti hic accusamus obcaecati fugiat blanditiis minus delectus. Pariatur deserunt velit incidunt porro nemo. Ea alias obcaecati voluptas illo nisi. Voluptatibus eos aliquid harum eum adipisci fuga rerum, at explicabo, sapiente corrupti, illum consequatur! Ex magni vel hic ad sequi! Id fuga a ex provident sint nam neque consequuntur facere repudiandae optio quod molestias sunt ut nisi, deserunt nulla dolorem numquam rerum repellendus omnis. Temporibus voluptate incidunt a doloremque molestiae veniam tempore saepe, cupiditate quam facilis praesentium, ipsa maiores placeat quae perferendis odit molestias cum! Provident, pariatur? Reprehenderit velit accusantium laborum ex. Impedit, doloribus perspiciatis eius quas magni illum cumque pariatur saepe aliquid enim? At harum a hic quis consectetur officiis nesciunt voluptates autem, nam dolore soluta, provident eos, quibusdam tempore aliquam iure explicabo maiores nihil repellendus necessitatibus accusantium architecto aspernatur ab libero. Magnam doloribus modi, eum culpa reiciendis soluta aliquam aperiam incidunt impedit? Ratione vel architecto, veniam quam voluptates nisi magni fugit harum voluptas culpa est tenetur eaque, ipsum obcaecati facilis odit ex necessitatibus adipisci doloremque nihil illum odio. Iure debitis molestias deserunt error, consequuntur unde quos! Illum debitis dolorem qui eaque explicabo ipsum, iure, impedit enim repellendus sequi voluptatum dolores adipisci! Debitis delectus, sapiente repudiandae corporis repellendus esse voluptatum reprehenderit maiores commodi expedita totam libero tempore nobis! Repudiandae temporibus, consequuntur quis commodi quo, repellat libero sit nesciunt quibusdam totam magni recusandae eius veritatis tempore ex impedit! Dignissimos, enim nihil quaerat unde vel, tempora consequuntur beatae quae voluptatibus, odit, quas. Quasi facere cum, ratione minima, vitae delectus!'),
    },
  }
}))
app.use(reactMiddlware)

app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
)
