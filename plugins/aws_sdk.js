import Vue from 'vue'

const AWS = require('aws-sdk')

export default ({ $config }, inject) => {
  AWS.config.accessKeyId = 'ASIA4NOC5OTVGSHLXYAE'
  AWS.config.secretAccessKey = 'RUhiyaO7gfRYlyAYr9ZCD53LFa1lw1uDQe0hkqe7'
  AWS.config.sessionToken =
    'FwoGZXIvYXdzEHYaDPbbeHOtuu9L/cSr2SK3AdssVY6Igd9M7wHcWRkDQPKuKLmyMBqboyiODLkJsHs4sTwK5HsExB8k/n8HcA4XaLvV6e1C73vWpxPu76HfSJUEH0XU+/qPtnKC+qXb0+m5qEpD7w2tDs/eNMcMR7xXIMFeE1OEwffsUmBZbPW+mJgvogfn9je3qJ4TsQXRvAVcFDucjEoSooy87Jke62oNXbMIBnrUFijceEKT39frM0L5V54789t1NGtxfZIeMsTaJI7vng66JCiw+rWMBjIt0fwKnOG7T3asTnQ8f2We6nlIGC9BjYjzcNjw9vCf7JyhHzhrI/fkBBPwbWNA'
  Vue.prototype.$AWS = AWS
}
