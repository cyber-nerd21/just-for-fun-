export const blocks = [
  {
    id: 1,
    title: "Block 1 — CNN Foundations",
    cards: [
      {
        front: "Output Size Formula",
        back: "(N + 2P - F) / S + 1\nN=input, P=padding, F=filter, S=stride\nEx: 6×6, F=3, P=0, S=1 → 4×4",
      },
      {
        front: "Parameter Count",
        back: "(F × F × C_in + 1) × num_filters\n+1 is bias per filter\nInput size doesn't affect params!",
      },
      {
        front: "Valid Padding",
        back: "No padding added\nOutput shrinks after convolution\nEx: 6×6 input, F=3 → 4×4 output",
      },
      {
        front: "Same Padding",
        back: "Zeros added around border\nOutput size = Input size\nP=1, F=3, S=1 → always same size",
      },
      {
        front: "Pooling Layer",
        back: "Zero trainable parameters\nMax pooling = takes max value in window\nAvg pooling = takes average\nReduces spatial size, keeps important info",
      },
      {
        front: "Feature Map Depth",
        back: "Depth = number of filters applied\n16 filters → depth 16\n1 filter = 1 feature map\nOutput shape = H × W × num_filters",
      },
      {
        front: "1×1 Convolution",
        back: "Reduces channels/depth only\nSpatial size unchanged\nEx: 28×28×256 → 28×28×32\nUsed as bottleneck before heavy filters",
      },
      {
        front: "Receptive Field",
        back: "Two 3×3 = one 5×5\nThree 3×3 = one 7×7\nSmaller filters stacked = same coverage\nFewer params + more ReLUs = better",
      },
    ],
  },
  {
    id: 2,
    title: "Block 2 — CNN Architectures",
    cards: [
      {
        front: "ResNet",
        back: "Skip/shortcut connections\nOutput = F(x) + x\nSolves vanishing gradient\nEnables 150+ layer deep networks\nInput added directly to output",
      },
      {
        front: "InceptionNet",
        back: "Parallel filters: 1×1, 3×3, 5×5\nAll applied simultaneously → concatenated\n1×1 conv = bottleneck before heavy filters\nCaptures features at multiple scales",
      },
      {
        front: "VGGNet",
        back: "Stacked small 3×3 filters\nTwo 3×3 = one 5×5 receptive field\nVGG16 = 16 layers, VGG19 = 19 layers\nSimple but very heavy on params",
      },
      {
        front: "MobileNet",
        back: "Depthwise Separable Convolutions\nStep 1: filter each channel separately\nStep 2: 1×1 to combine channels\nBuilt for mobile/edge devices\nDrastically reduces computation",
      },
      {
        front: "ShuffleNet",
        back: "Channel Shuffling between groups\nUses group convolution\nUltra lightweight — smaller than MobileNet\nFor extremely low compute environments",
      },
      {
        front: "EfficientNet",
        back: "Compound Scaling\nScales Depth + Width + Resolution together\nMost accurate per parameter\nUses scaling coefficient to balance all three",
      },
      {
        front: "AlexNet",
        back: "First deep CNN to win ImageNet (2012)\nIntroduced ReLU activation\nUsed Dropout to prevent overfitting\nFirst use of Data Augmentation\nTrained on 2 GPUs in parallel",
      },
      {
        front: "LeNet",
        back: "OG CNN by Yann LeCun (1998)\nDesigned for digit recognition (MNIST)\n2 conv + 3 FC layers\nUsed Tanh/Sigmoid (no ReLU yet)\nTiny by today's standards",
      },
    ],
  },
  {
    id: 3,
    title: "Block 3 — Object Detection",
    cards: [
      {
        front: "IoU Formula",
        back: "Intersection / (Area1 + Area2 - Intersection)\n>0.5 = acceptable\n>0.75 = good\n>0.9 = excellent\n0 = no overlap, 1 = perfect",
      },
      {
        front: "Precision vs Recall",
        back: "Precision = correct / total detected\nRecall = correct / total actual objects\nPrecision = apni prediction kitni sahi\nRecall = actual objects kitne pakde",
      },
      {
        front: "YOLO Core Idea",
        back: "One forward pass = real time speed\nImage divided into S×S grid\nEach cell predicts box + confidence + class\nYOLOv5 uses 3 scales: small, medium, large",
      },
      {
        front: "Anchor Boxes",
        back: "Predefined bounding box shapes\nNOT learned from scratch\nModel predicts offset from anchor\nDifferent anchors for different shaped objects",
      },
      {
        front: "NMS",
        back: "Non Maximum Suppression\nYOLO detects same object multiple times\nNMS keeps highest confidence box\nRemoves all duplicate overlapping boxes",
      },
      {
        front: "mAP",
        back: "Mean Average Precision\nMean of AP across ALL classes\nIndustry standard detection metric\nHigher = better detector",
      },
      {
        front: "Grid Cell Rule",
        back: "Cell responsible = where CENTER falls\nNot which cell has most overlap\nNot which cell has highest confidence\nCenter location = detection responsibility",
      },
      {
        front: "Real time vs Accurate",
        back: "Real time/CCTV/self driving → FPS priority\nMedical/forensic/satellite → mAP priority\nYOLO = real time\nRCNN = high accuracy but slow",
      },
    ],
  },
  {
    id: 4,
    title: "Block 4 — Segmentation",
    cards: [
      {
        front: "Semantic Segmentation",
        back: "Every pixel gets a class label\nAll cars = same color\nAll people = same color\nDoesn't distinguish between instances",
      },
      {
        front: "Instance Segmentation",
        back: "Each individual object gets unique ID\nCar1, Car2, Car3 separately\nMore precise than semantic\nDistinguishes between same class objects",
      },
      {
        front: "Encoder",
        back: "Progressively compresses spatial dimensions\nExtracts meaningful features\nThrows away noise and irrelevant pixels\nLearns what to keep during training",
      },
      {
        front: "Decoder",
        back: "Upsamples back to original size\nReconstructs pixel level output\nUses bottleneck features to rebuild\nFinal output = segmentation map",
      },
      {
        front: "Bottleneck",
        back: "Lowest resolution in network\nMost compressed representation\nPurest feature form\nEx: 512×512 → 4 pooling layers → 32×32",
      },
      {
        front: "U-Net Skip Connections",
        back: "Connects encoder layers to decoder layers\nSends spatial info BEFORE compression\nDecoder gets: bottleneck (what) + skip (where)\nResult = sharp precise segmentation",
      },
      {
        front: "ResNet vs U-Net Skips",
        back: "ResNet skip = same layer to itself\nResNet skip = fixes vanishing gradient\nU-Net skip = encoder to decoder\nU-Net skip = preserves spatial info\nDon't mix these up!",
      },
      {
        front: "Segmentation Map",
        back: "Final output of segmentation network\nSame spatial size as input image\nEach pixel has class label\nMore precise than bounding boxes",
      },
    ],
  },
];