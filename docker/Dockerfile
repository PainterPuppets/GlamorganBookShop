FROM nikolaik/python-nodejs:python2.7-nodejs11

COPY . /home/app
WORKDIR /home/app

RUN pip install -r requirements.txt

# build frontend
RUN cd javascripts && yarn && yarn production

EXPOSE 8000 8000

CMD ["sh", "./entrypoint.sh"]