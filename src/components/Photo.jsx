import classes from "./Photo.module.css";

export const Photo = ({ id, title, url, thumbnailUrl }) => {
  console.log("This is the clicked Photo");
  console.log(id, title, url, thumbnailUrl);
  return (
    <div className={classes.container}>
      <img src={url} className={classes.image} alt={title} />
      <p className={classes.caption}>{title}</p>
    </div>
  );
};
