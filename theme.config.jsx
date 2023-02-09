export default {
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        );
      }
      if (title === 'About') {
        return <>❓ {title}</>;
      }
      return <>👉 {title}</>;
    },
  },
};
