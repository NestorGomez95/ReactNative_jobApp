type JobItemProps = {
    route: {
      params: {
        job: {
          title: string;
          location: string;
        };
        onPress: () => void;
      };
    };
  };
  