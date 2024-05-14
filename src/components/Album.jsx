import classes from "./Album.module.css";

export const Album = ( {title, id, handleClick} ) => {
  return (
    <div className={classes.container} onClick={ () => handleClick(id)}>
      <h2>{title}</h2>
    </div>
  );
};
