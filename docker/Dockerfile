FROM nikolaik/python-nodejs:python2.7-nodejs11

COPY . /home/app
WORKDIR /home/app

# build frontend
RUN cd javascripts && yarn && yarn production

RUN pip install -r requirements.txt

EXPOSE 8000 8000

CMD ["sh", "./entrypoint.sh"]