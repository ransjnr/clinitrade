import axios from "axios";

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_TOKEN;
const FormatResult = (resp) => {
  let result = {};
  let finalResult = [];
  resp.forEach((item) => {
    // Drizzle returns object with table alias as keys when using leftJoin
    const listing =
      item.carLisiting || item.instrumentListing || item.carListing;
    const listingId = listing?.id;

    if (!result[listingId]) {
      result[listingId] = {
        instrument: listing,
        images: [],
      };
    }

    const image = item.carImages || item.instrumentImages;
    if (image) {
      result[listingId].images.push(image);
    }
  });

  Object.values(result).forEach((item) => {
    finalResult.push({
      ...item.instrument,
      images: item.images,
    });
  });

  return finalResult;
};

const CreateSendBirdUser = (userId, nickName, profileUrl) => {
  return axios.post(
    "https://api-" + SendBirdApplicationId + ".sendbird.com/v3/users",
    {
      user_id: userId,
      nickname: nickName,
      profile_url: profileUrl,
      issue_access_token: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": SendBirdApiToken,
      },
    }
  );
};

const CreateSendBirdChannel = (users, title) => {
  return axios.post(
    "https://api-" + SendBirdApplicationId + ".sendbird.com/v3/group_channels",
    {
      user_ids: users,
      is_distinct: true,
      name: title,
      operator_ids: [users[0]],
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": SendBirdApiToken,
      },
    }
  );
};

export default {
  FormatResult,
  CreateSendBirdUser,
  CreateSendBirdChannel,
};
