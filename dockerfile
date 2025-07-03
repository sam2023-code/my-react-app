# 使用官方的 Apache 镜像
FROM httpd:2.4

# 启用 mod_rewrite 模块
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# 将 React 应用的构建文件复制到 Apache 的默认根目录
COPY ./dist/ /usr/local/apache2/htdocs/

# 将 .htaccess 文件复制到默认根目录
COPY ./dist/.htaccess /usr/local/apache2/htdocs/.htaccess

# Copy the rest of your application files
#COPY src src/

# 暴露端口 80
EXPOSE 80

# 启动 Apache
CMD ["httpd-foreground"]