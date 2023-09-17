import { forwardRef, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { PhotoCamera, Upload } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@mui/material";

import { uploadFile } from "@/apis/files.api";
import defaultImage from "@/assets/images/default-image.png";

import { mbToBytes } from "./mbToBytes";
import { ICImageUploadProps, ICImageUploadRef } from "./types";

export const CImageUpload = forwardRef<ICImageUploadRef, ICImageUploadProps>(
  (
    {
      value,
      onChange,
      error,
      helperText,
      aspectRatio,
      maxWidth,
      maxMb, // Tính theo megabytes (MB)
      ...props
    },
    ref
  ) => {
    console.log("URL", value);

    //#region Data
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [isImgError, setIsImgError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const maxSize = useMemo(() => mbToBytes(maxMb || 0), [maxMb]);
    //#endregion

    //#region Event
    const checkImageFile = (file: File) => {
      if (file) {
        if (file.size > maxSize) {
          toast.error("Maximum image file size 5Mb!");

          return false;
        } else if (file.type.split("/")[0] !== "image") {
          toast.error("Invalid file format (image/*)!");

          return false;
        }
        return true;
      }
    };

    const handleUpload = async (file: File) => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }

      try {
        setIsLoading(true);

        const res = await uploadFile(file);

        onChange && onChange(res?.data?.data);

        setIsLoading(false);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Upload file fail!");

        setIsLoading(false);
      }
    };

    const onDragEnter = () => {
      wrapperRef.current?.classList?.add("dragover");
    };

    const onDragLeave = () => {
      wrapperRef.current?.classList.remove("dragover");
    };

    const onDragOver = (e: React.DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
    };

    const onFileInputChange = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];

      if (file) {
        const isValid = checkImageFile(file);

        if (isValid) {
          await handleUpload(file);

          setIsImgError(false);
        }
      }
    };

    const onDrop = async (e: React.DragEvent) => {
      e.stopPropagation();
      e.preventDefault();

      wrapperRef.current?.classList.remove("dragover");

      const file = e?.dataTransfer?.files[0];
      const isValid = checkImageFile(file);

      if (isValid) handleUpload(file);
    };

    const onImageError = () => {
      setIsImgError(true);
    };

    //#endregion

    //#region Render

    if (isLoading) {
      return (
        <Box
          ref={ref}
          margin="auto"
          position="relative"
          minWidth={250}
          maxWidth={maxWidth}
          borderRadius={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          component="label"
          sx={{ backgroundColor: "#eeeeee", aspectRatio: aspectRatio }}
        >
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            sx={{ aspectRatio: aspectRatio, backgroundColor: "#eeeeee" }}
            borderRadius={3}
          >
            <Box
              component="label"
              className="overlay"
              borderRadius="inherit"
              borderColor={error ? "red" : "#a1a0a0"}
              marginTop="-3px"
              marginLeft="-3px"
              height="100%"
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress />
            </Box>
          </Box>
        </Box>
      );
    }

    return value ? (
      <Box position="relative" display="flex" flexDirection="column">
        <Box>
          <Button
            startIcon={<PhotoCamera />}
            sx={{ mb: 1 }}
            color="info"
            component="label"
          >
            Change image
            <input
              type="file"
              ref={inputRef}
              onChange={onFileInputChange}
              hidden
              accept="image/*"
            />
          </Button>
        </Box>
        <Box
          position="relative"
          minWidth={250}
          maxWidth={maxWidth}
          sx={{ aspectRatio: aspectRatio }}
        >
          <img
            src={isImgError ? defaultImage : value.url || ""}
            alt=""
            className="customer-img"
            style={{
              inset: 0,
              position: "absolute",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            onError={onImageError}
          />
        </Box>
      </Box>
    ) : (
      <>
        <Box
          ref={ref}
          className="c-upload"
          margin="auto"
          position="relative"
          minWidth={250}
          maxWidth={maxWidth}
          // height={isSquare ? 270 : 150}
          borderRadius={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          component="label"
          sx={{ backgroundColor: "#eeeeee", aspectRatio: aspectRatio }}
        >
          <Box
            component="label"
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            className="overlay"
            position="absolute"
            borderRadius="inherit"
            border="3px dashed #a1a0a0"
            borderColor={error ? "red" : "#a1a0a0"}
            marginTop="-3px"
            marginLeft="-3px"
            sx={{
              inset: 0,
              backgroundColor: "transparent",
              cursor: "pointer",
              "&.dragover": {
                border: "3px dashed #2188FD",
              },
            }}
          >
            {
              <input
                type="file"
                ref={inputRef}
                onChange={onFileInputChange}
                hidden
                accept="image/*"
              />
            }
          </Box>
          <Box textAlign="center" fontWeight={600} p={1.1} sx={{ opacity: 1 }}>
            <Upload sx={{ fontSize: "3rem", color: "#1da996" }} />
            {aspectRatio && (
              <Typography>{`Aspect ratio ${aspectRatio.split("/")[0]}:${
                aspectRatio.split("/")[1]
              }`}</Typography>
            )}
            <Typography>
              Select a file or drag and drop it here
              <br /> {`(Maximum ${maxMb}MB)`}
            </Typography>
          </Box>
        </Box>
        {helperText && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </>
    );
    //#endregion
  }
);

CImageUpload.defaultProps = {
  aspectRatio: "16/9",
  // maxWidth: 600,
  maxMb: 15,
};
