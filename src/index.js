// 最小静态资源 Worker：把 public/ 下的文件原样返回
export default {
  async fetch(request, env, ctx) {
    return env.ASSETS.fetch(request);
  },
};
