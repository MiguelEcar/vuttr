
CREATE TABLE tool
(
  id bigint auto_increment NOT NULL,
  title character varying(100) NOT NULL,
  this_link character varying(500) NOT NULL,
  description character varying(500),

  PRIMARY KEY (id),
  UNIQUE KEY uk_tool_title (title)
);

CREATE TABLE tool_tag
(
  id bigint auto_increment NOT NULL,
  text character varying(100) NOT NULL,
  tool bigint NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (tool) REFERENCES tool(id)
);
