import styles from "./Button.module.css";
function Button({ primary, secondary }) {
  return (
    <>
      {primary && (
        <button className={styles.buttonPrimary}>Update & Save</button>
      )}
      {secondary && <button className={styles.buttonSecondary}>Cancel</button>}
    </>
  );
}

export default Button;
