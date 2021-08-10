// offline config passed to workbox-build.
module.exports = {
  globPatterns: ['**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}'],
  // ��̬�ļ��ϼ���������վ��ʹ�������� webp ��ʽ���ļ����뽫�ļ�������ӽ�ȥ��
  globDirectory: 'public',
  swDest: 'public/service-worker.js',
  maximumFileSizeToCacheInBytes: 10485760, // ���������ļ���С�����ֽ�Ϊ��λ��
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [ // �������Ҫ���� CDN ��Դ�������ø�ѡ����û�У����Բ����á�
    // CDNs - should be CacheFirst, since they should be used specific versions so should not change
    {
      urlPattern: /^https:\/\/blog\.cai2\.wang\/.*/, // ���滻����� URL
      handler: 'CacheFirst'
    }
  ]
}
